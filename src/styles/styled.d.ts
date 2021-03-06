// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    hoverColor: string;
    titleColor: string;
    upward: string;
    downward: string;
  }
}
