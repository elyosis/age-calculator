import { ContainerComponent } from "../container/container.component";

export const resultsLoader = (component: ContainerComponent, limit: number, position: number) => {
  
  let load = 0;

  if (limit === load) {
    component.calculation[position] = load;
    return;
  }
  
  const counter = () => {
    load++;
    
    if (load <= limit) { 
      component.calculation[position] = load;
    } else {
      clearInterval(interval);
    }
  }
  
  let interval = setInterval(counter, 20);
}