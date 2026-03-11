import 'react';
import { MeshStandardMaterialProps } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardMaterial: MeshStandardMaterialProps;
      // se precisar, pode adicionar outros materiais, ex:
      // meshBasicMaterial: MeshBasicMaterialProps;
    }
  }
}