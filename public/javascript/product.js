const onSubmitHandler = (event) => {
    event.preventDefault();
    // Your form submission logic here  
    console.log("Form submitted!");
    const product = event.target.productName.value;
    const obj ={
        'productName': product
    }

    axios.post('http://localhost:3000'+ '/products', obj)
    .then(response => {
        console.log("value returned from post request - " + response.data.value);
    })
   
    };     