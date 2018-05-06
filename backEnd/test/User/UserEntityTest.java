package User;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.junit.Test;


public class UserEntityTest {



    @Test
    public void test() {

        SessionFactory sessionFactory;
        Session session;
        Transaction transaction;
        System.out.println("test....");

        //1. 创建配置对象

        Configuration configuration = new Configuration().configure();
        System.out.println("test....");
        sessionFactory = configuration.buildSessionFactory();
        System.out.println("test....");
        session = sessionFactory.openSession();
        System.out.println("test....");
        transaction = session.beginTransaction();

        //6. 生成专业对象
        UserEntity new_user = new UserEntity();
        new_user.setUsername("111");
        new_user.setPassword("981001");
        new_user.setPhoneNum("124983535");
        new_user.seteMail("34987@qq.com");
        //7. 保存对象进入数据库
        session.save(new_user);


        //8. 提交事务
        transaction.commit();
        //9. 关闭会话
        session.close();
        //10. 关闭会话工厂
        sessionFactory.close();
    }
}