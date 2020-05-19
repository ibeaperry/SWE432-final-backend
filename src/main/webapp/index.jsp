<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
  <script>
    var servletURL = window.location.origin + "/server";
    var servlet2URL = window.location.origin+ "/twoButtons";
    var servlet3URL = window.location.origin+ "/file";

  </script>
<title>First JSP</title>
</head>
<%@ page import="java.util.Date" %>
<body>
<h2>Hello Heroku! I am JSP</h2>
<strong>Current Time is</strong>: <%=new Date() %>
<button onclick="window.location.assign(servletURL);"> Try the servlet </button>
<button onclick="window.location.assign(servlet2URL);"> Go to 2 buttons</button>
<button onclick="window.location.assign(servlet3URL);"> Go to file persitence servlet </button>
</body>
</html>
