    import ListDetails from './ListDetails';
    function List() {
       const empData = [
        { "eid": 101, "ename": "Akshay", "salary": 1000, "grade": "G1" },
        { "eid": 102, "ename": "Sooraj", "salary": 2000, "grade": "G2" },
        { "eid": 103, "ename": "Charles", "salary": 3000, "grade": "G3" },
        { "eid": 104, "ename": "Daniel", "salary": 4000, "grade": "G4" },
        { "eid": 105, "ename": "Emraan", "salary": 5000, "grade": "G5" },
        { "eid": 106, "ename": "Amal", "salary": 1000, "grade": "G1" },
        { "eid": 107, "ename": "Apurva", "salary": 2000, "grade": "G2" },
        { "eid": 108, "ename": "Aparna", "salary": 3000, "grade": "G3" },
        { "eid": 109, "ename": "Shivani", "salary": 4000, "grade": "G4" },
        { "eid": 110, "ename": "Emie", "salary": 5000, "grade": "G5" },
        { "eid": 111, "ename": "Aparna", "salary": 1000, "grade": "G1" },
        { "eid": 112, "ename": "Jenny", "salary": 2000, "grade": "G2" },
        { "eid": 113, "ename": "John", "salary": 3000, "grade": "G3" },
        { "eid": 114, "ename": "Joseph", "salary": 4000, "grade": "G4" },
        { "eid": 115, "ename": "Amit", "salary": 5000, "grade": "G5" },
        { "eid": 116, "ename": "Akshara", "salary": 1000, "grade": "G1" },
        { "eid": 117, "ename": "Soorya", "salary": 2000, "grade": "G2" },
        { "eid": 118, "ename": "Jismi", "salary": 3000, "grade": "G3" },
        { "eid": 119, "ename": "Jacob", "salary": 4000, "grade": "G4" },
        { "eid": 120, "ename": "Elon Musk", "salary": 5000, "grade": "G5" }
      ]
      
      return (
        <div >
          
          <ListDetails emp={empData}/><hr></hr>
          
        </div>
      );
}
    
    export default List;
    