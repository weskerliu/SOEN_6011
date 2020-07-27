If the website is not hosted, start a server on a specifoc port.

One option:

Start a python server by following below steps:
1. Start cmd in local project file location
2. Run the command --> python -m http.server portno
3. In the browser open project by running commmand --> localhost:portno

Steps to merge panel.html and footer.html:

1. Add below div tags in <body> section:
<body> 
     <div id="sidepanel"></div>

      Content
	
     <div id="footer"></div>


2. After the script tags in <body> section, add the below code:

<script> 
    $(function(){
        $("#sidepanel").load("panel.html"); 
    });
    </script>

<script> 
    $(function(){
        $("#footer").load("footer.html"); 
    });
    </script>
</body>
