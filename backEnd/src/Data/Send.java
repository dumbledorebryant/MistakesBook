package Data;

import Hibernate.HibernateUtil;
import MistakeList.MistakesEntity;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(name = "Fetch", urlPatterns = "/Data/Send")
public class Send extends HttpServlet {

    private void processFetch(HttpServletRequest request,
                              HttpServletResponse response)
            throws ServletException, IOException
    {
        Session session = HibernateUtil.getSessionFactory()
                .openSession();
        Transaction transaction = session.beginTransaction();

        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        try {
            //Timestamp time = request.getParameter("time");
            String title = request.getParameter("title");
            String content = request.getParameter("content");
            String cause = request.getParameter("cause");
            String userID = request.getParameter("userID");
            String tags = request.getParameter("tags");

            Query query = session.createQuery("select mistake " +
                    "from MistakesEntity mistake ");

            List<MistakesEntity> mistakelist = query.list();
            int mistakeID = mistakelist.size() + 1;

            MistakesEntity singleMistake = new MistakesEntity();

            singleMistake.setMistakeId(mistakeID);
            singleMistake.setMistakeTitle(title);
            singleMistake.setMistakeContent(content);
            singleMistake.setMistakeCause(cause);
            singleMistake.setUserId(userID);
            singleMistake.setMistakeTag(tags);
            //singleMistake.setMistakeTime(time);

            session.save(singleMistake);
            out.println("Add mistakes success!");

            transaction.commit();
            session.close();
        } catch (Exception ex)
        {
                HibernateUtil.getSessionFactory()
                        .openSession()
                        .getTransaction()
                        .rollback();
                if (ServletException.class.isInstance(ex))
                {
                    throw (ServletException) ex;
                }
                else
                {
                    throw new ServletException(ex);
                }
        } finally
        {
            out.flush();
            out.close();
            HibernateUtil.getSessionFactory().close();
        }
    }


    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException
    {
        processFetch(request, response);
    }

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException
    {
        processFetch(request, response);
    }
}

