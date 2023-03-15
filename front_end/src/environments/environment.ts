export interface EnvironmentInterface {
    production: boolean;
    apiUrl: string;
}
  

export const environment: EnvironmentInterface = {
    production: false,
    apiUrl: 'http://localhost:3000/api',
};