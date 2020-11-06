package rest;

import com.google.gson.Gson;
import dto.ChuckDTO;
import dto.DadDTO;
import dto.OurJokeDTO;
import java.io.IOException;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import utils.HttpUtils;

/**
 * REST Web Service
 *
 * @author lam
 */
@Path("jokes")
@RolesAllowed({"admin", "user"})
public class JokeResource {

    @Context
    private UriInfo context;
    private static Gson gson = new Gson();

   
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJokes() throws IOException {
        String chuck = HttpUtils.fetchData("https://api.chucknorris.io/jokes/random");
        ChuckDTO chuckDTO = gson.fromJson(chuck, ChuckDTO.class);
        
        String dad = HttpUtils.fetchData("https://icanhazdadjoke.com/");
        DadDTO dadDTO = gson.fromJson(dad, DadDTO.class);
        
        OurJokeDTO combinedDTO = new OurJokeDTO(chuckDTO, dadDTO);
        return gson.toJson(combinedDTO);
    }
}
