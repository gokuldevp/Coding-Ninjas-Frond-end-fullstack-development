var main = function () {
    // Use it to set the student and address objects
    let student, address;
  
    function setStudent(name="name", age=18, rollNo=13) {
      // Step 1: Create the student object with three properties: name, age, and roll no.
      student = {
        name: name,
        age: age,
        rollNo: rollNo,
      };
    }
  
    function setAddressAndUpdateStudent(city="a", state="b") {
      // Step 2: Create the address object with city and state properties
      address = {
        city: city,
        state: state
      };
  
      // Add the address object as a property to the student object
      student.address = address;
    }
  
    function deleteRollNumber() {
      // Step 3: Remove the 'rollNo' property from the student object
      delete student.rollNo;
    }
  
    function getStudent() {
      return student;
    }
  
    function getAddress() {
      return address;
    }
  
    return {
      setStudent,
      setAddressAndUpdateStudent,
      deleteRollNumber,
      getStudent,
      getAddress
    };
  };