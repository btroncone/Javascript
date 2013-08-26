using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BetTrackerJQ.Models
{
    public class Bet
    {
        public int Id { get; set; }
        public string StakeholderOne { get; set; }
        public string StakeholderTwo { get; set; }
        public string EventName { get; set; }
        public string EventDate { get; set; }
        public string Description { get; set; }
        public decimal Stakes { get; set; }
    }
}