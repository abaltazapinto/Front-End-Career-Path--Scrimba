**Invoice Creator Application**

This project implements a dynamic invoice creator system, where users can add different tasks and services, update quantities, and generate invoices. The application includes features such as a dark mode toggle, responsive carousel navigation, and email invoice sending functionality.

Table of Contents
Features
Getting Started
Core Functions
Dark Mode Toggle
Carousel
Invoice Management
Task and Service Management
Send Invoice Email
Security
Error Handling
Technologies Used
Conclusion


**Features

- Add or remove tasks to the invoice dynamically
- Increment task count and recalculate total prices.
- Carousel navigation for available tasks
- Send invoice details via email
  
## Getting Started
1. Clone the repository to your local machine
2. Open index.html in your browser.
3. Interact with the interface to add tasks, update quantities, and send an invoice
   
## Core Functions
### Dark Mode Toggle
- Functionality: Toggles betwen light and dark modes for the entire application
- Implementation:
    ```
    const toggle = document.getElementVById("darkmode-toggle");
    toggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode", toggle.checked);
    })
    ```
    - **Description**: when the toggle is switch is changed, the app adds or remove the dark-mode class from the body, applying dark mode styles.

### Carousel

- **Funcitonality**: Displays the available tasks/services in a paginated manner
- **Key** **Functions**
  - **initCarousel**(): Initializes the carousel by creating buttons for each task
  - **updateCarousel**(): Controls which tasks are displayed based on the current index
  - **prevButton** & **nextBtn**: Handlers for navigating between carousel items

### Invoice Management

- **Functionality**: Adds taks to the invoice, updates their counts,and calcuates total amounts.
- **Key** **Functions**:
  - **addToInvoice**(): Adds or updates items in the invoice
  - **addItemToSelectedItems**(itemName, itemPrice, itemCount): Pushes new items to the **selectedItems** array with their associated quantities and prices.
  - **Properties**:
    - **selectedItems**: Array holding the tasks added to the invoice
    - **itemCounts**: Tracks the count of each task.
    - **TotalAmount**: Calculates and displays the total amount of the invoice.

### Task and wor-item remotion

- **removing** both the work-items from the carousel and the task-items from the invoice by and update the total accordingly**DOUBLE - CLICKING**
  
  - #### . `removeTask(index)`
 Removes a work item from the `workItems` array based on the index and re-renders the carousel.

  - #### . `removeItem(itemName)`
Removes an item from the invoice:
- Decreases the item count if it's greater than zero.
- If the count reaches zero, removes the item from `selectedItems`.
- Updates the DOM to reflect the removal of the item and updates the total price accordingly.


### Task and Servie Management

- **Functionality**: Manages the creation and removal of tasks from the list of available services.
- **Key Functions**:
  - **addTask**():Adds a custim tasks to the list of services dynamically.
  - **removetask**(): Removes a task form the lis of services (by clicking two times)

### Send Invoice Email

- **Functionality**: Sends the invoice details via email to the user.
- **Key Functions**
  - **sendInvoiceEmail**(): Gathers the recipient's email, name, and invoice details, and sends them via the EmailJS service.
  - **Properties**:
    - **recipientEmail**, **recipientName**: Input fields for user data.
  - **Validation**: Email format is validated before sending the invoice.

### Security

- **DOMPurify**: The app uses DOMPurify to sanitizze user inputs and more important prevent XSS attacks. 

### Error handling

- **Form validation**: The email input field is validated to ensure it is in the correct format before attempting to send an invoice.
- **Use Feedback**: Alerts are used to notify users of errors 

### Tecnologies Used

- **HTML + css + js**
- **DOMPOurify**
- **EmailJS**
- **Aria Labels**: To improve accessibility
