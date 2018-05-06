package UserManager;

import Hibernate.HibernateUtil;
import User.UserEntity;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.lang.String;

@WebServlet(name = "Register", urlPatterns = "/UserManager/Register")
public class Register extends HttpServlet {

    private void processRegister(HttpServletRequest request,
                            HttpServletResponse response)
            throws ServletException, IOException
    {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = session.beginTransaction();

        response.setCharacterEncoding("utf-8");
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        String pwd = request.getParameter("pwd");
        String e_mail = request.getParameter("e_mail");
        String phoneNum = request.getParameter("phoneNum");

        try
        {
            Query query = session.createQuery("select user " +
                    "from UserEntity user " +
                    "where user.username = :name");
            query.setParameter("name", name);

            List<UserEntity> list = query.list();
            if(list.size() == 0)
            {
                UserEntity singleUser = new UserEntity();
                singleUser.setUsername(name);
                singleUser.setPassword(pwd);
                singleUser.seteMail(e_mail);
                singleUser.setPhoneNum(phoneNum);
                session.save(singleUser);
                out.println("Sign up success!");
            }
            else
            {
                out.print("Username has been used!");
            }
            transaction.commit();
            session.close();
        }
        catch (Exception ex)
        {
            HibernateUtil.getSessionFactory()
                    .openSession()
                    .getTransaction()
                    .rollback();
            if ( ServletException.class.isInstance(ex))
            {
                throw (ServletException)ex;
            }
            else
            {
                throw new ServletException(ex);
            }
        }
        finally{
            out.flush();
            out.close();
            HibernateUtil.getSessionFactory().close();
        }
    }

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException
    {
        processRegister(request, response);
    }
    public void doPost(HttpServletRequest request,
                       HttpServletResponse response)
            throws ServletException, IOException
    {
        processRegister(request, response);
    }
}