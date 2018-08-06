export interface Beer  {
    id?: string;
    nazovPiva?: string;
    mSladu?: number;
    vHlNalevu: number;
    vystierka?: number;
    lowCarbTemp?: number;
    lowCarbTime?: number;
    highCarbTemp?: number;
    highCarbTime?: number;
    oneStepTemp?:number;
    oneStepTime?: number;
    odRmutTemp?: number;
    odRmutTime?: number;
    objemPredku?: number;
    objemVyslVody?: number;
    vPredChmel?: number;
    hSliadiny?: number;
    chmelovar?: number;
    hMladiny?: number;
    vMladiny?: number;
    fg?: number;
    abv?: number;
    datum?: any;
    pozRmutovanie?: string;
    pozChmelovar?: string;
    pozKvasenie?: string;
    pozChut?: string;
    ebc?: number;
    oneStep?: any;
    /*pozOMladiny?: number;
    predOdpar?: number;
    hRmutu?: number;
    predOSladiny?: number;
    predOHlNalevu?: number;
    predOPredku?: number;*/
}