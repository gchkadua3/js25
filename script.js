var massive = [];

      function addToMassive() {
        var inputElement = document.getElementById('inputNumber');
        var inputValue = Number(inputElement.value);
        var result = document.getElementById ('result');
        
        massive.push(inputValue);
        result.textContent = massive;
        

      } 
