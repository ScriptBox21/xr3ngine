import React, { useEffect } from "react";

import { isMobileOrTablet } from "@xr3ngine/engine/src/common/functions/isMobile";
import { Button, Snackbar, SnackbarContent } from '@material-ui/core';
import { connect } from "react-redux";
import { selectAppOnBoardingStep } from "../../../redux/app/selector";
import { generalStateList, setAppOnBoardingStep } from '../../../redux/app/actions';
import store from "../../../redux/store";

import { Thumbsticks } from '@xr3ngine/engine/src/common/enums/Thumbsticks';
import { GamepadButtons } from '@xr3ngine/engine/src/input/enums/GamepadButtons';
import { CharacterInputSchema } from "@xr3ngine/engine/src/templates/character/CharacterInputSchema";

import styles from './OnBoardingBox.module.scss';
import { DefaultInput } from "@xr3ngine/engine/src/templates/shared/DefaultInput";
import { getMutableComponent } from "@xr3ngine/engine/src/ecs/functions/EntityFunctions";
import { Input } from "@xr3ngine/engine/src/input/components/Input";
import { Entity } from "@xr3ngine/engine/src/ecs/classes/Entity";

import { IconSwipe } from '../IconSwipe';
import { IconLeftClick } from '../IconLeftClick';
import { Microphone } from '@styled-icons/boxicons-regular/Microphone';
import { TouchApp } from "@material-ui/icons";

const mapStateToProps = (state: any): any => {
  return {   
    onBoardingStep: selectAppOnBoardingStep(state)
  };
};

interface Props {
  onBoardingStep?: number;
  actorEntity? : Entity;
}

const OnBoardingBox = ({ onBoardingStep,actorEntity } : Props) =>{
  const cardFadeInOut = step =>{    
    const fadeOutInterval = setTimeout(()=>
    //works ok-but it's very ugly
    {document.querySelector('[class*=helpHintSnackBar]').style.opacity = '0'}
    //not works nice
    // document.querySelector('[class*=helpHintSnackBar]').classList.add('OnBoardingBox_hidden')
    , 0)
    const fadeIntInterval = setTimeout(()=>{
      store.dispatch(setAppOnBoardingStep(step));
      //works ok-but it's very ugly
      if(step !== generalStateList.ALL_DONE){document.querySelector('[class*=helpHintSnackBar]').style.opacity = '1';}
      //not works nice
      // step !== generalStateList.ALL_DONE && document.querySelector('[class*=helpHintSnackBar]').classList.remove('OnBoardingBox_hidden');
    }, 2000);
    if(step === generalStateList.TUTOR_END){
      clearInterval(fadeOutInterval);
      clearInterval(fadeIntInterval);
    }
  }
  const addLookAroundEventListeners = () =>{
    const InputComponent = getMutableComponent(actorEntity, Input);
    InputComponent.schema.inputAxisBehaviors[DefaultInput.LOOKTURN_PLAYERONE] = {changed : [{behavior:actorLooked}]};
  };

  const actorLooked = () =>{
    cardFadeInOut(generalStateList.TUTOR_MOVE)
    const InputComponent = getMutableComponent(actorEntity, Input);
    delete InputComponent.schema.inputAxisBehaviors[DefaultInput.LOOKTURN_PLAYERONE];
   
    //gamepad
    const gamepadInputMap = {
      [GamepadButtons.DPad1]: DefaultInput.FORWARD, // DPAD 1
      [GamepadButtons.DPad2]: DefaultInput.BACKWARD, // DPAD 2
      [GamepadButtons.DPad3]: DefaultInput.LEFT, // DPAD 3
      [GamepadButtons.DPad4]: DefaultInput.RIGHT // DPAD 4
    };
    InputComponent.schema.gamepadInputMap.axes[Thumbsticks.Left] =  DefaultInput.MOVEMENT_PLAYERONE;           
    InputComponent.schema.gamepadInputMap.buttons = Object.assign(InputComponent.schema.gamepadInputMap.buttons, gamepadInputMap) ;

    //add keyboard
    const keyboardInputMap = {
      w: DefaultInput.FORWARD,
      a: DefaultInput.LEFT,
      s: DefaultInput.BACKWARD,
      d: DefaultInput.RIGHT};
    InputComponent.schema.keyboardInputMap = Object.assign(InputComponent.schema.keyboardInputMap, keyboardInputMap) ;
    //keyboard
    InputComponent.schema.inputButtonBehaviors[DefaultInput.FORWARD].started.push({behavior:actorMoved});
    InputComponent.schema.inputButtonBehaviors[DefaultInput.BACKWARD].started.push({behavior:actorMoved});
    InputComponent.schema.inputButtonBehaviors[DefaultInput.LEFT].started.push({behavior:actorMoved});
    InputComponent.schema.inputButtonBehaviors[DefaultInput.RIGHT].started.push({behavior:actorMoved});
        
    //
    InputComponent.schema.inputAxisBehaviors[DefaultInput.MOVEMENT_PLAYERONE].changed.push({behavior:actorMoved});
  };

  const actorInteracted = () =>{
    cardFadeInOut(generalStateList.TUTOR_UNMUTE);
    const InputComponent = getMutableComponent(actorEntity, Input);
    InputComponent.schema = CharacterInputSchema;
  };

  const actorMoved = () =>{
    const InputComponent = getMutableComponent(actorEntity, Input);
    //keyboard
    InputComponent.schema.inputButtonBehaviors[DefaultInput.FORWARD].started.pop();
    InputComponent.schema.inputButtonBehaviors[DefaultInput.BACKWARD].started.pop();
    InputComponent.schema.inputButtonBehaviors[DefaultInput.LEFT].started.pop();
    InputComponent.schema.inputButtonBehaviors[DefaultInput.RIGHT].started.pop();
    //joystick
    InputComponent.schema.inputAxisBehaviors[DefaultInput.MOVEMENT_PLAYERONE].started.pop();
    
    InputComponent.schema.keyboardInputMap.e = DefaultInput.INTERACT;
    InputComponent.schema.gamepadInputMap.buttons[GamepadButtons.A] = DefaultInput.INTERACT;

    InputComponent.schema.inputButtonBehaviors[DefaultInput.INTERACT] = {ended : [{behavior:actorInteracted}]};
    cardFadeInOut(generalStateList.TUTOR_INTERACT)
  };

  const exitTutorialHandle = () => {
    const InputComponent = getMutableComponent(actorEntity, Input);
    InputComponent.schema = CharacterInputSchema;
    cardFadeInOut(generalStateList.ALL_DONE)
  };

  var message = null;
  var imageTip = null;

    switch(onBoardingStep){
      case generalStateList.TUTOR_LOOKAROUND:message='Touch and Drag to look around'; 
                                            imageTip = isMobileOrTablet() ? <IconSwipe className={styles.IconSwipe} width="125.607" height="120.04" viewBox="0 0 125.607 120.04" />:<IconLeftClick className={styles.IconLeftClick}  width="136.742" height="144.242" viewBox="0 0 136.742 144.242" />; 
                                            addLookAroundEventListeners(); 
                                            break;      
      case generalStateList.TUTOR_MOVE: message= isMobileOrTablet() ? ' Use joystick to move' : 
                            <span>Use keybuttons <span className={styles.keyButton}>W</span><span className={styles.keyButton}>S</span>
                            <span className={styles.keyButton}>A</span><span className={styles.keyButton}>D</span> to move</span>; break;
      case generalStateList.TUTOR_INTERACT: message= isMobileOrTablet() ? 'Use to interact' : <span>Press <span className={styles.keyButton}>E</span> to interact</span>; 
                                            isMobileOrTablet() && (imageTip = <TouchApp className={styles.TouchApp} />); break;
      case generalStateList.TUTOR_UNMUTE: message='Tap to toggle Mic';  imageTip = <Microphone className={styles.Microphone} />;break;
      default : message= '';break;
    } 
 
  return message ? <>
      <section className={styles.exitButtonContainer}>
        <Button variant="contained" className={styles.exitButton} 
            onClick={exitTutorialHandle}>Exit Tutorial</Button>
      </section>
      <Snackbar 
      anchorOrigin={{vertical: 'bottom',horizontal: 'center'}} 
      classes={{
        root: styles.helpHintSnackBar +' '+ styles[generalStateList[onBoardingStep].toLowerCase()]+ ' ' + styles[`isMobile${isMobileOrTablet()}`],
        anchorOriginBottomCenter: styles.bottomPos,                    
      }}
      open={true} 
      autoHideDuration={10000}>
          <section>
            {imageTip}
            <p>{message}</p>
          </section>
      </Snackbar>
    </>  : null;
};

export default connect(mapStateToProps)(OnBoardingBox);
