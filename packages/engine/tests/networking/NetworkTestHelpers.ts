import { Engine } from '../../src/ecs/classes/Engine'
import { applyIncomingActions } from '../../src/networking/systems/IncomingNetworkSystem'

export const mockProgressWorldForNetworkActions = () => {
  // increment tick
  Engine.currentWorld!.fixedTick += 2 // TODO: figure out why we need to dispatch two ticks ahead

  // incoming
  applyIncomingActions(Engine.currentWorld!)
}
