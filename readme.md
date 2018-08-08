To find the process running on particular port
	netstat -amo | findstr 8080 
	This will return the process ids, then use the below command to kill the process
	taskkill /pid <pid> /F
	