package MistakeList;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "mistakes", schema = "userinfo")
public class MistakesEntity {
    private int mistakeId;
    private Timestamp mistakeTime;
    private String mistakeTitle;
    private String mistakeContent;
    private String userId;
    private String mistakeCause;
    private String mistakeTag;

    @Id
    @Column(name = "mistakeID", nullable = false)
    public int getMistakeId() {
        return mistakeId;
    }

    public void setMistakeId(int mistakeId) {
        this.mistakeId = mistakeId;
    }

    @Basic
    @Column(name = "mistakeTime", nullable = true)
    public Timestamp getMistakeTime() {
        return mistakeTime;
    }

    public void setMistakeTime(Timestamp mistakeTime) {
        this.mistakeTime = mistakeTime;
    }

    @Basic
    @Column(name = "mistakeTitle", nullable = true, length = 32)
    public String getMistakeTitle() {
        return mistakeTitle;
    }

    public void setMistakeTitle(String mistakeTitle) {
        this.mistakeTitle = mistakeTitle;
    }

    @Basic
    @Column(name = "mistakeContent", nullable = true, length = 256)
    public String getMistakeContent() {
        return mistakeContent;
    }

    public void setMistakeContent(String mistakeContent) {
        this.mistakeContent = mistakeContent;
    }

    @Basic
    @Column(name = "userID", nullable = true, length = 20)
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "mistakeCause", nullable = true, length = 256)
    public String getMistakeCause() {
        return mistakeCause;
    }

    public void setMistakeCause(String mistakeCause) {
        this.mistakeCause = mistakeCause;
    }

    @Basic
    @Column(name = "mistakeTag", nullable = true, length = 32)
    public String getMistakeTag() {
        return mistakeTag;
    }

    public void setMistakeTag(String mistakeTag) {
        this.mistakeTag = mistakeTag;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MistakesEntity that = (MistakesEntity) o;
        return mistakeId == that.mistakeId &&
                Objects.equals(mistakeTime, that.mistakeTime) &&
                Objects.equals(mistakeTitle, that.mistakeTitle) &&
                Objects.equals(mistakeContent, that.mistakeContent) &&
                Objects.equals(userId, that.userId) &&
                Objects.equals(mistakeCause, that.mistakeCause) &&
                Objects.equals(mistakeTag, that.mistakeTag);
    }

    @Override
    public int hashCode() {

        return Objects.hash(mistakeId, mistakeTime, mistakeTitle, mistakeContent, userId, mistakeCause, mistakeTag);
    }
}
