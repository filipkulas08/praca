import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  

  constructor(private db: AngularFirestore) { }



// metody tworzące słowa, kategorię oraz poziomy
  createWord(Record)
  {
    return this.db.collection('words').add(Record);
  }
  createCategory(Record)
  {
    return this.db.collection('category').add(Record);
  }
  createLevel(Record)
  {
    return this.db.collection('level').add(Record);
  }



//metody pobierające wszystkie słowa, kategorię oraz poziomy
  getWords(){
    return this.db.collection('words').snapshotChanges();
  }
  getCategory(){
    return this.db.collection('category').snapshotChanges();
  }
  getLevel(){
    return this.db.collection('level').snapshotChanges();
  }

  
//metody aktualizujące słowa, kategorię oraz poziomy w bazie
  updateWord(recordid,record){
    this.db.doc('words/' + recordid).update(record);
  }
  updateCategory(recordid,record){
    this.db.doc('category/' + recordid).update(record);

  }
  updateLevel(recordid,record){
    this.db.doc('level/' + recordid).update(record);

  }
  updateUser(recordid,record){
    this.db.doc('Users/' + recordid).update(record);

  }


//metody usuwające słowa,kategorie oraz poziomy z bazy
  deleteWord(record_id){
    this.db.doc('words/' + record_id).delete();
  }

  deleteCategory(record_id){
    this.db.doc('category/' + record_id).delete();
  }

  deleteLevel(record_id){
    this.db.doc('level/' + record_id).delete();
  }
  

//metoda pobierająca listę słów w zależności od wybranej kategorii oraz poziomu
  whereLimit(categoryName,limit,levelName){
    return this.db.collection('words', ref => ref.where('word.category.name', '==', categoryName).where('word.category.level.name', '==', levelName).limit(limit)).snapshotChanges();
 }

 where(categoryName,levelName){
  return this.db.collection('words', ref => ref.where('word.category.name', '==', categoryName).where('word.category.level.name', '==', levelName)).snapshotChanges();
}

activeUser(userId){
  return this.db.collection('Users', ref => ref.where('id', '==', userId)).snapshotChanges();
}
  
}
