******************************************************Savvy Assignment******************************************************

The three tasks were given:

	1. Polymer 1.0:
		i. Create an input field "paper-input"
		ii. Create a button "paper-button"
		iii. Both of the above elements wrapped in a form.

	2. Socket.io:
		i. Set the variable myMsg to the text that is in the input
		ii. Send a message using socket.emit('myMessage', myMsg) when the paper-button is clicked.

	3. Node.js:
		i. Make a local server using Node.js
		ii. Include socket.io, listen for myMessage,
		iii. When we receive the message, log to the console that we received a message and what message we received.


Solution:

	The SavvyAssignment folder consists of the following (showing only relevant file/folders):
	
	SavvyHomework/
		-> bower_components/
			-> paper-input/
				-> paper-input.html
				->..
				->..

			-> paper-button/
				-> paper-button.html
				->..
				->..

			-> webcomponentsjs/
				-> webcomponents.js
				->..
				->..
			->..
			->..

		-> node_modules/

		-> bower.json

		-> index.html

		-> runServer.js

		-> package.json

		-> README.txt



	Operating System Environment: Ubuntu 14.04



	Steps:

	1. Navigate to SavvyHomework directory at the terminal (command line).

	2. Execute the command:		node runServer.js

	3. NodeJS will start a local server at port 4000 (port number defined in runServer.js)

	4. Go to the browser, and at the URL bar, type 'localhost: 4000' and press Enter.

	5. Enter the respective message at the input text bar and click 'Send' button to print at the log console.



	Additional Functionalities:

		The following are some extra functionalities which were added in this homework:

			1. The messages sent are printed in the top page and they get appended. Each message event is append as a list

			2. If there is no text at the input bar, then by clicking 'Send' button, an alert box pops-up that to enter at least one character.


Thank you,
Nishit Prasad
