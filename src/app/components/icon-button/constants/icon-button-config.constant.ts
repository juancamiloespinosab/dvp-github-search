import { BUTTON_CONFIG } from '../../button/constants/button-config.constant';
import { ICON_CONFIG } from '../../icon/constants/icon-config.constant';
import { IconButton } from '../interfaces/icon-button.interface';

export const ICON_BUTTON_CONFIG: IconButton = {
  ...BUTTON_CONFIG,
  ...ICON_CONFIG
};
