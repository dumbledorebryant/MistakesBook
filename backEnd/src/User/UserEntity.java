package User;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "userinfo")
public class UserEntity {
    private String username;
    private String password;
    private String eMail;
    private String phoneNum;

    @Id
    @Column(name = "username", nullable = false, length = 20)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "password", nullable = true, length = 16)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "e_mail", nullable = true, length = 32)
    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    @Basic
    @Column(name = "phone_num", nullable = true, length = 16)
    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserEntity that = (UserEntity) o;
        return Objects.equals(username, that.username) &&
                Objects.equals(password, that.password) &&
                Objects.equals(eMail, that.eMail) &&
                Objects.equals(phoneNum, that.phoneNum);
    }

    @Override
    public int hashCode() {

        return Objects.hash(username, password, eMail, phoneNum);
    }
}
