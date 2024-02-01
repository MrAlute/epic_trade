//Use this functions to use the modals
// <button onclick="show_confirm_alert()">show info</button>
// <button onclick="show_info_alert()">show confirm</button>
// <button onclick="show_Err_alert()">show error</button>
// <button onclick="show_success_alert()">show success</button>


//var url = "http://127.0.0.1:8000/";
var url = "https://epictradeglobal.onrender.com/";

const token = localStorage.getItem('token')

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

// MODAL JavaScript
const New = {
    status: 'success',
    title: '',
    content: '',
    alert: function ({ status, title, content, confirmbtn = true }) {
        var title;
        var status;
        var content;
        var modal = document.createElement('section');
        modal.setAttribute('class', 'alert_modal');
        document.body.append(modal);
        var alert = document.createElement('div');
        alert.setAttribute('class', 'alert_container');
        modal.appendChild(alert);
        if (title == '' || title == null) {
            title = this.title;
        } else {
            title = title
        }
        if (status == '' || status == null) {
            status = this.status;
        } else {
            status = status;
        }
        if (content == '' || content == null) {
            content = this.content;
        } else {
            content = content
        }
        alert.innerHTML = `
         <div class="alert_heading"></div>
    <div class="alert_details">
        <h2>
          ${title}
        </h2>
        <p>
            ${content}

        </p>
    </div>
    <div class="alert_footer"></div>
         ` ;



        var alert_heading = document.querySelector('.alert_heading');
        var alert_footer = document.querySelector('.alert_footer');
        if (status == '' || status == 'success') {
            alert_heading.innerHTML = `
            <svg width="80" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"/></path></g></svg>
            `;
            alert_footer.innerHTML = `
         <span class="close" title="Ok">
          Ok
        </span>
         `;
            alert_heading.style = 'background: linear-gradient(80deg, #67FF86, #1FB397);';
            document.querySelector('.alert_details > h2').style.color = '#1FB397';
        } else if (status == 'danger' || status == 'error') {
            alert_heading.innerHTML = `
            <svg width="80" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12L16 16M12 12L8 8M12 12L8 16M12 12L16 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/></path></g></svg>
            `;
            alert_footer.innerHTML = `
         <span class="close" title="Ok">
          Ok
        </span>
         `;
            alert_heading.style = ' background: linear-gradient(80deg, #FF6767, #B31F1F);';
            document.querySelector('.alert_details > h2').style.color = '#B31F1F';
        } else if (status == 'info' || status == 'confirm') {
            alert_heading.innerHTML = `
            <svg width="80" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M8.99999 10C8.99999 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 10.9814 14.5288 11.8527 13.8003 12.4C13.0718 12.9473 12.5 13 12 14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="20;0"/></path></g><circle cx="12" cy="17" r="1" fill="white" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"/></circle></svg>
            `;
            confirmbtn == true ?
                alert_footer.innerHTML = `
         <span class="accept" title="I approve">
          I approve
        </span>
        <span class="close" title="I refuse">
          I refuse
        </span>
         `
                :
                alert_footer.innerHTML = `
        <span class="close" title="Ok">
       Ok
        </span>
         `
                ;
            alert_heading.style = 'background: linear-gradient(80deg, #7ED1FF, #484B95);';
            document.querySelector('.alert_details > h2').style.color = '#484B95';
        }
        document.querySelector('.alert_footer .close').addEventListener('click', function () {
            alert.remove();
            modal.remove();
        })
        document.querySelector('.alert_footer .accept').addEventListener('click', function () {
            alert.remove();
            modal.remove();
        })
        document.querySelector('.alert_footer .accept').onclick = accept;

    }
}

function show_confirm_alert() {
    New.alert({
        status: 'info',
        title: 'Site administrator account',
        content: 'This account is the administrator of the site and not everyone has access to it !!!',
        confirmbtn: false
    });
}
function show_info_alert() {
    New.alert({
        status: 'info',
        title: 'You confirm to delete this account',
        content: 'Do you really want to delete this account forever?',
        confirmbtn: true
    });
}
function accept() {
    New.alert({
        status: 'success',
        title: 'successful',
    });
}

function show_Err_alert() {
    New.alert({
        status: 'error',
        title: 'Server side error',
        content: 'A server side error, try again later, or contact site support',
    })
}
function show_success_alert() {
    New.alert({
        status: 'success',
        title: 'Update successful',
        content: 'Your account information has been successfully updated',
    })
}
// New.alert({
//     status: 'info',
//     title: 'welcome',
//     content: 'This is the admin portal',
//     confirmbtn: false
// })


// check if user is logged in
var htmlFile = location.href;
var getFileName = htmlFile.split("/");
getFileName = getFileName.pop();
setInterval(() => {
    if ((localStorage.getItem("token") === null || localStorage.getItem("token") == '') && getFileName != "login.html") {
        console.log("not logged in");
        window.location.href = "/login.html"
    }
}, 5000);


// Loading spinner function
var container = document.getElementsByClassName('loading-spinner-container')[0];

window.LoadingSpinner = {
    spin: function (container) {
        var numLines = 16;
        var rotationInterval = 360 / numLines;
        var html = '<svg class="loading-spinner"><title>Loading...</title>';
        var currentRotation = 0;
        // draw the spinner
        for (var i = 0; i < numLines; i++) {
            html += '<line x1="80" y1="50" x2="100" y2="50" transform="rotate(' + (rotationInterval * i) + ' 50 50)" stroke="rgba(0, 0, 0, ' + (i / numLines) + ')" stroke-width="5"></line>';
        }
        html += '</svg>';
        container.innerHTML = html;
        // clear the timer, if any
        clearInterval(LoadingSpinner.timer);
        // spin it
        LoadingSpinner.timer = window.setInterval(function () {
            currentRotation += rotationInterval;
            container.firstChild.setAttribute('style', 'transform: rotate(' + currentRotation + 'deg)');
        }, 1000 / 20);
    },
    stop: function (container) {
        clearInterval(LoadingSpinner.timer);
        container.innerHTML = '';
    }
};


// Function to show the custom slide-in and slide-out success alert modal
function showCustomSuccessModal(message, bgcolor) {
    const customSuccessModal = document.getElementById('customSuccessModal');
    const successMessage = customSuccessModal.querySelector('.custom-modal-body p');
    successMessage.textContent = message;

    const bgColorModal = document.querySelector(".custom-modal-content");
    bgColorModal.style.backgroundColor = bgcolor;

    customSuccessModal.style.display = 'block';

    // Wait for the next repaint before applying the slide-in animation class
    requestAnimationFrame(function () {
        customSuccessModal.classList.add('custom-slide-in-out-modal');
    });

    // Hide the modal after 5 seconds
    setTimeout(function () {
        hideCustomSuccessModal();
    }, 5000);
}

// Function to hide the custom slide-in and slide-out success alert modal
function hideCustomSuccessModal() {
    const customSuccessModal = document.getElementById('customSuccessModal');

    // Add the slide-out animation class
    customSuccessModal.classList.add('custom-slide-out-modal');

    // Hide the modal after the slide-out animation is completed
    setTimeout(function () {
        customSuccessModal.style.display = 'none';
        customSuccessModal.classList.remove('custom-slide-in-out-modal', 'custom-slide-out-modal');
    }, 500); // Adjust the delay time for the slide-out animation as needed
}



// Reusable delete modal
 // Reusable modal and functions
 const modal = document.getElementById('delete-modal');
 const deleteButton = document.getElementById('confirm_delete');
 const cancelButton = document.getElementById('cancel-button');

 let deleteEndpoint = ''; // Variable to store the delete endpoint
 let deleteCallback = null; // Callback function to execute after deletion

 // Function to show the delete confirmation modal
 const showConfirmModal = (endpoint, userid, callback) => {
     deleteEndpoint = endpoint;
     deleteCallback = callback;

     const deleteButton = document.getElementById('confirm_delete');
     modal.style.display = "flex";
     deleteButton.setAttribute('data-userid', userid);
 }

 // Function to hide the modal
 const hideModal = () => {
     modal.style.display = "none";
 }

 // Event listener for cancel button
 if (cancelButton) {
     cancelButton.addEventListener('click', () => {
         hideModal();
     });
 }
 // Event listener for delete button
 if (deleteButton) {
     deleteButton.addEventListener('click', () => {
         if (deleteEndpoint && deleteCallback) {
             // Perform the delete action using the stored endpoint
             deleteAction(deleteEndpoint);
             // Execute the callback function after deletion
             deleteCallback();
         }
         hideModal();
     });
 }

 // Function to perform the delete action
 const deleteAction = (endpoint) => {
     const userid = deleteButton.dataset.userid;

     $.ajax({
         url: url + endpoint + userid,
         type: "delete",
         headers: {
             "Authorization": "Bearer " + token,
         },
         success: function (data) {
             LoadingSpinner.stop(container);
             showCustomSuccessModal(data.message, "green");
             location.reload();
         },
         error: function (err) {
             LoadingSpinner.stop(container);
             showCustomSuccessModal("An error occurred", "red");
             console.log(err);
         }
     });
 }