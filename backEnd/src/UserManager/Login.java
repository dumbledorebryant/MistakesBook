package UserManager;

import User.UserEntity;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.List;
import java.lang.String;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "Login", urlPatterns = "/UserManager/Register")
public class Login extends HttpServlet {

    private void processLogin(HttpServletRequest request,
                               HttpServletResponse response)
            throws ServletException, IOException
    {
        Configuration config = new Configuration().configure();
        SessionFactory sessionFactory = config.buildSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();

        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        String pwd = request.getParameter("pwd");
        try
        {
            Query query = session.createQuery("select user " +
                    "from UserEntity user " +
                    "where user.username= :name");
            query.setParameter("name", name);
            List<UserEntity> list = query.list();
            if(list.size() == 0)
            {
                out.print("User doesn't exist!");
            }
            else
            {
                UserEntity user = (UserEntity) query.uniqueResult();
                String password = user.getPassword();
                if(!pwd.equals(password))
                {
                    out.print("Password is Wrong!");
                }
                else
                {
                    out.print("Login success!");
                }
            }
        } catch (Exception ex)
        {
            sessionFactory.openSession().getTransaction().rollback();
            if (ServletException.class.isInstance(ex))
            {
                throw (ServletException) ex;
            }
            else
            {
                throw new ServletException(ex);
            }
        }
        finally
        {
            out.flush();
            out.close();
            transaction.commit();
            session.close();
            sessionFactory.close();
        }
    }

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException
    {
        processLogin(request, response);
    }

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException
    {
        processLogin(request, response);
    }
}
