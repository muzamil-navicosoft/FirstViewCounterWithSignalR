using Microsoft.AspNetCore.SignalR;

namespace FirstViewCounter.Hubs
{
    public class UserHub : Hub
    {
        public static int ViewCounter { get; set; }

        public async Task newWindowloaded()
        {
            ViewCounter++;
            await Clients.All.SendAsync("uPdateTotalViewsAsync", ViewCounter);

        }
    }
}
