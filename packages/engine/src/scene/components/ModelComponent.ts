import { createMappedComponent } from '../../ecs/functions/ComponentFunctions'

export type ModelComponentType = {
  src: string
  envMapOverride: string
  textureOverride: string
  matrixAutoUpdate: boolean
  isUsingGPUInstancing: boolean
  isDynamicObject: boolean
  curScr?: string
  error?: string
}

export const ModelComponent = createMappedComponent<ModelComponentType>('ModelComponent')
