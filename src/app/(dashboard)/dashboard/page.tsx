import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  DollarSign,
  CreditCard,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard overview page",
};

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Subscriptions",
    value: "+2,350",
    change: "+180.1%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19%",
    trend: "up",
    icon: CreditCard,
  },
  {
    title: "Active Now",
    value: "+573",
    change: "-2%",
    trend: "down",
    icon: Activity,
  },
];

const recentActivity = [
  { id: 1, action: "New user registered", time: "2 minutes ago" },
  { id: 2, action: "Order #1234 completed", time: "5 minutes ago" },
  { id: 3, action: "Payment received", time: "10 minutes ago" },
  { id: 4, action: "New comment on post", time: "15 minutes ago" },
  { id: 5, action: "User updated profile", time: "20 minutes ago" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s an overview of your account.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;

          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs">
                  <TrendIcon
                    className={`mr-1 h-3 w-3 ${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  />
                  <span
                    className={
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }
                  >
                    {stat.change}
                  </span>
                  <span className="ml-1 text-muted-foreground">
                    from last month
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Overview Card */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Monthly revenue and user statistics
            </CardDescription>
          </CardHeader>
          <CardContent className="flex h-[300px] items-center justify-center text-muted-foreground">
            <div className="text-center">
              <p>Chart placeholder</p>
              <p className="text-sm">Add your preferred chart library here</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity Card */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm">{activity.action}</span>
                  <Badge variant="secondary" className="text-xs">
                    {activity.time}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
