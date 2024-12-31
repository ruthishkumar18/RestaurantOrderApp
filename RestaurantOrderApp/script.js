document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dish = document.getElementById('dish').value;
    const quantity = document.getElementById('quantity').value;
    const tableNumber = document.getElementById('tableNumber').value;

    const orderSummary = `Order placed for ${quantity} of ${dish} at table number ${tableNumber}.`;
    
    document.getElementById('orderSummary').innerText = orderSummary;
});
