export abstract class Pizza {
  public dough: string;
  public sauce: string;
  public toppings: string[];
  public name: string;

  public prepare(): void {
    console.log('Preparing ' + this.name);
    console.log('Tossing Dough ... ' + this.dough);
    console.log('Adding Sauce ... ' + this.sauce);
    console.log('Adding Toppings ... ');
    this.toppings.forEach(t => console.log('Adding ' + t));
  }

  public bake(): void {
    console.log('Baking the Pizza For 45 mins... ');
  }

  public cut(): void {
    console.log('Cutting the Pizza Into Diagonal Pieces...');
  }

  public box(): void {
    console.log('Placing Pizza Into Store Official Box.');
  }

  public getname(): string {
    return this.name;  
  }
}