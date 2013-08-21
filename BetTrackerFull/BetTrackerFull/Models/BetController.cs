using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace BetTrackerFull.Models
{
    public class BetController : ApiController
    {
        private BetTrackerFullContext db = new BetTrackerFullContext();

        // GET api/Bet
        public IEnumerable<Bet> GetBet()
        {
            return db.Bets.AsEnumerable();
        }

        // GET api/Bet/5
        public Bet GetBet(Int32 id)
        {
            Bet bet = db.Bets.Find(id);
            if (bet == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return bet;
        }

        // PUT api/Bet/5
        public HttpResponseMessage PutBet(Int32 id, Bet bet)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != bet.Id)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(bet).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST api/Bet
        public HttpResponseMessage PostBet(Bet bet)
        {
            if (ModelState.IsValid)
            {
                db.Bets.Add(bet);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, bet);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = bet.Id }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/Bet/5
        public HttpResponseMessage DeleteBet(Int32 id)
        {
            Bet bet = db.Bets.Find(id);
            if (bet == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Bets.Remove(bet);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, bet);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}