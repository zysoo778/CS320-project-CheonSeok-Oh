package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.Arrays;
import java.util.List;

@Path("/quizzes")
public class QuizResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Quiz> getQuizzes() {
        return Arrays.asList(
                new Quiz(1, "Scientific Knowledge", "This quiz tests your scientific knowledge."),
                new Quiz(2, "Common Knowledge", "This quiz tests general knowledge that everyone should know.")
        );
    }

    public static class Quiz {
        private int quizId;
        private String title;
        private String description;

        public Quiz(int quizId, String title, String description) {
            this.quizId = quizId;
            this.title = title;
            this.description = description;
        }

        public int getQuizId() {
            return quizId;
        }

        public String getTitle() {
            return title;
        }

        public String getDescription() {
            return description;
        }
    }
}