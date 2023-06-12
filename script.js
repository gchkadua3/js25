var massive = [];

      function addToMassive() {
        var inputElement = document.getElementById("inputNumber");
        var inputValue = Number(inputElement.value);
        
        massive.push(inputValue);
        document.write(massive);
      }