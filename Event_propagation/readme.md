Event propagation has 3 steps  
	1. Event Capturing  
	2. Event On target  
	3. Event bubbling  

When any event has to be triggered the event traverses from Window object and follows the hierarchy till it reaches the actual dom on which the event is triggered, and again it traverses back till window object.
   
The traversal from window to the target is capturing, here any listeners registered with capture flag true will be called, this will go on untill it reaches the target object, then it bubbles up and calls all the listeners with capture flag false.

