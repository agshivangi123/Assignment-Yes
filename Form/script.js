  const form = document.getElementById('myForm');
  const resultsDiv = document.getElementById('results');


  // Prevent form submission
  const onSubmit = (event) => {
    event.preventDefault();
    for (let i = 1; i < form.children.length; i = i+2) {
      const fieldValue = form.children[i].value;
      const p = document.createElement('p');
      p.innerHTML = fieldValue;
      const randomColor = getRandomColor();
      p.style.color = randomColor;
      resultsDiv.appendChild(p);
    }
   
  }
  form.reset();
  

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  form.addEventListener('submit', onSubmit);








/* // Get input values
 const field1Value = document.getElementById('name').value;
 const field2Value = document.getElementById('sname').value;
 const field3Value = document.getElementById('phoneno').value;
 
 
 // Create a new paragraph element
 const p1 = document.createElement('p1');
 const p2 = document.createElement('p2');
 const p3 = document.createElement('p3');
 
 
 // Set the content of the paragraph
 p1.textContent = `First Name: ${field1Value.toUpperCase()} `;
 p2.textContent = `Last Name: ${field2Value.toUpperCase()}`;
 p3.textContent = `Phone no: ${field3Value}`;
 


 // Style the paragraph dynamically (for demonstration purposes)
 const randomColor = getRandomColor();
 p1.style.color = randomColor;
 p2.style.color = randomColor;
 p3.style.color = randomColor;
 
 
 // Append the paragraph to the results div
 resultsDiv.appendChild(p1);
 resultsDiv.appendChild(p2);
 resultsDiv.appendChild(p3);
 
 
 // Clear the form fields
 form.reset();
});
 
function getRandomColor() {
 const letters = '0123456789ABCDEF';
 let color = '#';
 for (let i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}*/
