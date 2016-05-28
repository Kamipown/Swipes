var Swipe =
{
	swipe_div: undefined,
	text: undefined,
	down_span: undefined,
	up_span: undefined,
	min_dist: undefined,
	click_x: undefined,
	click_y: undefined,

	init: function()
	{
		this.swipe_div = document.getElementById("swipe_div");
		this.text = document.getElementById("text");
		this.down_span = document.getElementById("down_span");
		this.up_span = document.getElementById("up_span");
		this.min_dist = 16;
		document.getElementById("info").innerHTML = "Minimum distance: " + this.min_dist + "px."
		this.init_events();
	},

	init_events: function()
	{
		this.swipe_div.addEventListener("mousedown", this.mouse_down);
		this.swipe_div.addEventListener("mouseup", this.mouse_up);
	},

	mouse_down: function(e)
	{
		Swipe.click_x = e.offsetX;
		Swipe.click_y = e.offsetY;
		Swipe.up_span.style.display = "none";
		Swipe.down_span.style.left = e.offsetX - 5 + "px";
		Swipe.down_span.style.top = e.offsetY - 5 + "px";
		Swipe.down_span.style.display = "block";
	},

	mouse_up: function(e)
	{
		var dist_x = Math.abs(Swipe.click_x - e.offsetX);
		var dist_y = Math.abs(Swipe.click_y - e.offsetY);
		Swipe.up_span.style.left = e.offsetX - 5 + "px";
		Swipe.up_span.style.top = e.offsetY - 5 + "px";
		Swipe.up_span.style.display = "block";
		if (dist_x >= dist_y && dist_x >= Swipe.min_dist)
			if (Swipe.click_x < e.offsetX)
				Swipe.print_swipe(1);
			else
				Swipe.print_swipe(3);
		else if (dist_x < dist_y && dist_y >= Swipe.min_dist)
			if (Swipe.click_y < e.offsetY)
				Swipe.print_swipe(2);
			else
				Swipe.print_swipe(0);
		else
			Swipe.print_swipe(-1);
	},

	print_swipe: function(n)
	{
		if (n == 0) this.text.innerHTML = "You swipe to the Top.";
		else if (n == 1) this.text.innerHTML = "You swipe to the Right.";
		else if (n == 2) this.text.innerHTML = "You swipe to the Bottom.";
		else if (n == 3) this.text.innerHTML = "You swipe to the Left.";
		else this.text.innerHTML = "You didn't swipe."
	}
}

window.addEventListener("load", Swipe.init());