import { IconName, IconNamesEnum } from "ngx-bootstrap-icons";

export interface Icon {
    iconName: IconNamesEnum | IconName
    iconColor?: string,
    iconSize?: string
}