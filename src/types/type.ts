export interface Content {
  _id: number;
  imgMobile: string;
  imgDesktop: string;
  subpageMobileLogo: string;
  subpageDesktopImg: string;
  subpageDesktopHeading: string;
  title: string;
  textOne: string;
  textTwo: string;
  textThree?: string;
  contact?: ProfilInfo[];
}

export interface ProfilInfo {
  img: string;
  email: string | undefined;
}

export interface NavbarType {
  navImgLink: string;
  navActive: string;
  logo: string;
  logoBack: string;
}
