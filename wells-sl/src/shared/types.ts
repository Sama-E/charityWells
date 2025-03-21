export enum SelectedPage {
    Home = "home",
    Project = "project",
    Impact = "impact",
    ContactUs = "contactus",
    Donate = "donate",
    Wells = "wells",
    Works = "works"
}

export interface MissionType {
    // icon: JSX.Element;
    title: string;
    description: string;
    }

export interface LocationType {
    // icon: JSX.Element;
    title: string;
    description: string;
}

export interface WorkType {
    name: string;
    description?: string;
    image: string;
  }

export interface ProjectType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}

export interface AmountType {
    amount: string;
}

//"?" in description makes it optional