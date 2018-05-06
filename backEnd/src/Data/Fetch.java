package Data;

import Hibernate.HibernateUtil;
import MistakeList.MistakesEntity;
import net.sf.json.JSONArray;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "Fetch", urlPatterns = "/Data/Fetch")
public class Fetch extends HttpServlet {

    private void processFetch(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException
    {
        try {
            Session session = HibernateUtil.getSessionFactory()
                                           .openSession();
            Transaction transaction = session.beginTransaction();
            String name = request.getParameter("name");
            String tag = request.getParameter("tag");

            response.setCharacterEncoding("utf-8");
            response.setContentType("application/json");
            PrintWriter out = response.getWriter();

            Query query = session.createQuery("select mistake " +
                                                "from MistakesEntity mistake " +
                                                "where mistake.userId= :id ");

            query.setParameter("id", name);
            List<MistakesEntity> list = query.list();
            List<MistakesEntity> returnList = new ArrayList<>();
            for(MistakesEntity mis: list)
            {
                if (mis.getMistakeTag().equals(tag))
                {
                    returnList.add(mis);
                }
            }
            JSONArray jsonArray = new JSONArray();

            if (list.size() > 0) {
                if (jsonArray.addAll(returnList)) {
                    out.print(jsonArray);
                }
                transaction.commit();
            }
        }

        catch (Exception ex)
        {
            HibernateUtil.getSessionFactory()
                         .openSession()
                         .getTransaction()
                         .rollback();
            if (ServletException.class.isInstance(ex))
            {
                throw (ServletException)ex;
            }
            else
            {
                throw new ServletException(ex);
            }
        }
    }

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException
    {
        processFetch(request, response);
    }

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException
    {
        processFetch(request, response);
    }
}

