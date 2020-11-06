package dto;

public class OurJokeDTO {
    private ChuckDTO chuck;
    private DadDTO dad;
    private String joke1;
    private String joke1Reference;
    private String joke2;
    private String joke2Reference;

    public OurJokeDTO(ChuckDTO chuck, DadDTO dad) {
        this.joke1 = chuck.getValue();
        this.joke1Reference = chuck.getUrl();
        this.joke2 = dad.getJoke();
        this.joke2Reference = "https://icanhazdadjoke.com/";
    }

    public ChuckDTO getChuck() {
        return chuck;
    }

    public void setChuck(ChuckDTO chuck) {
        this.chuck = chuck;
    }

    public DadDTO getDad() {
        return dad;
    }

    public void setDad(DadDTO dad) {
        this.dad = dad;
    }
}
