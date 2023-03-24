export enum SelectedPage {
    Home = "home",
    Project = "project",
    Impact = "impact",
    ContactUs = "contactus",
    Donate = "donate",
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

//"?" in description makes it optional