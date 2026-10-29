// app/components/DashboardView.tsx
import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', revenue: 18600 },
  { month: 'February', revenue: 22500 },
  { month: 'March', revenue: 27800 },
  { month: 'April', revenue: 19000 },
  { month: 'May', revenue: 31200 },
  { month: 'June', revenue: 38400 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function DashboardView() {
  
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Welcome back, Dominic</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Active Subscriptions</p>
          <p className="text-3xl font-extrabold mt-2">1,482</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Monthly Recurring Revenue</p>
          <p className="text-3xl font-extrabold mt-2 text-emerald-500">$24,950</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Churn Rate</p>
          <p className="text-3xl font-extrabold mt-2 text-indigo-500">1.2%</p>
        </div>
      </div>



      <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Monthly Recurring Revenue</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Showing total revenue for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12, top: 12 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.2} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="revenue"
              type="natural"
              fill="url(#fillRevenue)"
              fillOpacity={0.4}
              stroke="var(--color-revenue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-1">
            <div className="flex items-center gap-2 font-medium text-gray-900 dark:text-white leading-none">
              Trending up by 12.4% this month <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="text-gray-500 dark:text-gray-400 leading-none">
              January - June 2026
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
    </div>
  );
}