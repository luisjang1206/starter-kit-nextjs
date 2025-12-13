import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Eye,
  MousePointer,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Analytics",
  description: "Analytics and statistics",
};

const analyticsData = [
  {
    title: "Page Views",
    value: "124,892",
    change: "+12.5%",
    trend: "up",
    icon: Eye,
  },
  {
    title: "Click Rate",
    value: "3.24%",
    change: "+0.8%",
    trend: "up",
    icon: MousePointer,
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: "-0.3%",
    trend: "down",
    icon: Clock,
  },
  {
    title: "Bounce Rate",
    value: "42.3%",
    change: "-2.1%",
    trend: "up",
    icon: BarChart3,
  },
];

const topPages = [
  { path: "/", views: 45231, change: "+12%" },
  { path: "/dashboard", views: 23456, change: "+8%" },
  { path: "/components", views: 12345, change: "+15%" },
  { path: "/docs", views: 8901, change: "+5%" },
  { path: "/blog", views: 6789, change: "-2%" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Track your website performance and user engagement.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsData.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;

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
        {/* Chart Card */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
            <CardDescription>
              Daily visitors over the past 30 days
            </CardDescription>
          </CardHeader>
          <CardContent className="flex h-[300px] items-center justify-center text-muted-foreground">
            <div className="text-center">
              <BarChart3 className="mx-auto h-12 w-12 mb-2" />
              <p>Chart placeholder</p>
              <p className="text-sm">Add your preferred chart library here</p>
            </div>
          </CardContent>
        </Card>

        {/* Top Pages Card */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page) => (
                <div
                  key={page.path}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm font-mono">{page.path}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {page.views.toLocaleString()}
                    </span>
                    <Badge
                      variant={page.change.startsWith("+") ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {page.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
