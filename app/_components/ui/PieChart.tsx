"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
    { browser: "Full Inspection", visitors: 10, fill    : "var(--color-chrome)" },
    { browser: "Oil Change", visitors: 10, fill: "var(--color-safari)" },
    { browser: "Diagnostic", visitors: 10, fill: "var(--color-firefox)" },
    { browser: "Maintenance", visitors: 10, fill: "var(--color-edge)" },
    { browser: "Tire Rotation", visitors: 10, fill: "var(--color-other)" },
]
const chartConfig = {
    visitors: {
        label: "Total",
    },
    chrome: {
        label: "Full Inspection",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Oil Change",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Diagnostic",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Maintenance",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Tire Rotation",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export function Chart({ data }: { data: ReservationData }) {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])


    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Types of reservations</CardTitle>
                <CardDescription>Number of reservations made</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Reservations
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total reservations for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
