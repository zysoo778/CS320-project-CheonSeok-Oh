package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

@Path("/user")
public class UserNameResource {

    @POST
    @Path("/{name}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public String createUser(@PathParam("name") String name) {
        UserName userName = new UserName(name);
        userName.persist();
        return "Hello " + name + "! Your name has been stored in the database.";
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getNames() {
        return UserName.listAll().toString();
    }

    @PATCH
    @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public String updateName(@PathParam("id") String id, String newName) {
        UserName userName = UserName.findById(id);
        String oldName = userName.name;
        userName.name = newName;
        return "'" + oldName + "' has been updated to '" +newName + "' in the database.";
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public String deleteName(@PathParam("id") String id) {
        UserName userName = UserName.findById(id);
        userName.delete();
        return userName.name + " has been deleted from the database.";
    }
}