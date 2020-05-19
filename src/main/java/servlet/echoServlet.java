package servlet;

import java.io.PrintWriter;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import org.json.simple.JSONObject;

@WebServlet(name = "MyServlet", urlPatterns = { "/echo" })

public class echoServlet extends HttpServlet {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

       /* org.json.JSONObject ret = new org.json.JSONObject();
        ret.put("Comments", req.getParameter("Comments"));
        ret.put("building", req.getParameter("building"));
        ret.put("number", req.getParameter("number"));
        ret.put("Date_of_Visit", req.getParameter("Date_of_Visit"));
        ret.put("first_name", req.getParameter("first_name"));
        ret.put("last_name", req.getParameter("last_name"));
        ret.put("rating", req.getParameter("rating"));
        ret.put("email", req.getParameter("email"));
        PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(ret);
        out.flush();*/
    }

    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

      /*  org.json.JSONObject ret = new org.json.JSONObject();
        ret.put("Comments", req.getParameter("Comments"));
        ret.put("building", req.getParameter("building"));
        ret.put("number", req.getParameter("number"));
        ret.put("Date_of_Visit", req.getParameter("Date_of_Visit"));
        ret.put("first_name", req.getParameter("first_name"));
        ret.put("last_name", req.getParameter("last_name"));
        ret.put("rating", req.getParameter("rating"));
        ret.put("email", req.getParameter("email"));

        PrintWriter out = resp.getWriter();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        out.print(ret);
        out.flush();*/
    }
}
