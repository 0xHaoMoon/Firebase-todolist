import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<any>; // Obersavle ist eine Variable die sich updatet, <any> könnte auch ein string oder number sein. Deshalb any 
  // alternative
  todos!: Array<any>; 

  todotext = '';

  firestore: Firestore = inject(Firestore); // Importieren des Objektes 'Firestore' aus import

  constructor() {
    const todosCollection = collection(this.firestore, 'todos'); // greift auf die collection im firestore zu mit dem namen 'todos' 
    this.todos$ = collectionData(todosCollection); // aus der collection greifen wir nun auf alle daten zu und geben es der globalen varible
    
    //alternative
    this.todos$.subscribe((newTodos)=>{ // abrufen der neusten Daten, wenn sich daten im Datenbank ändert, wird diese aufegerufen                      
      console.log(newTodos)
      this.todos = newTodos; // damit global auf die variable todos zugegriffen werden kann
    })
  }

  //hinzufügen daten in datenbank
  addTodo(){

  }

}
