import { useEffect, useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm, useWatch } from "react-hook-form";
import {
    getMonthlyStats,
    updateMonthlyStat,
} from "../api/getDashboardData/getSales";
import {
    getPageStats,
    updatePageStat,
} from "../api/getDashboardData/getPageStats";
import EditableDataSection from "../components/editdata/EditableDataSection";
import SaveStatus from "../components/editdata/SaveStatus";
import {
    buildUpdatePayload,
    prepareDraftRows,
} from "../components/editdata/helpers";
import Skeleton from "react-loading-skeleton";

export default function Editdata() {
    const queryClient = useQueryClient();
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { isSubmitting },
    } = useForm({
        defaultValues: {
            sales: [],
            pageStats: [],
        },
    });

    const { data: salesData = [], isLoading: isSalesLoading, error: salesError } = useQuery({
        queryKey: ["monthlyStats"],
        queryFn: getMonthlyStats,
    });

    const {
        data: pageStatsData = [],
        isLoading: isPageStatsLoading,
        error: pageStatsError,
    } = useQuery({
        queryKey: ["pageStats"],
        queryFn: getPageStats,
    });

    const salesDraft = useWatch({ control, name: "sales" }) || [];
    const pageStatsDraft = useWatch({ control, name: "pageStats" }) || [];

    useEffect(() => {
        reset({
            sales: prepareDraftRows(salesData),
            pageStats: prepareDraftRows(pageStatsData),
        });
    }, [salesData, pageStatsData, reset]);

    const salesById = useMemo(
        () => new Map(salesData.map((row) => [row.id, row])),
        [salesData]
    );

    const pageStatsById = useMemo(
        () => new Map(pageStatsData.map((row) => [row.id, row])),
        [pageStatsData]
    );

    const saveMutation = useMutation({
        mutationFn: async (formValues) => {
            const salesUpdates = (formValues.sales || [])
                .filter((row) => salesById.has(row.id))
                .map((row) => {
                    const original = salesById.get(row.id);
                    return updateMonthlyStat(row.id, buildUpdatePayload(row, original));
                });

            const pageStatsUpdates = (formValues.pageStats || [])
                .filter((row) => pageStatsById.has(row.id))
                .map((row) => {
                    const original = pageStatsById.get(row.id);
                    return updatePageStat(row.id, buildUpdatePayload(row, original));
                });

            await Promise.all([...salesUpdates, ...pageStatsUpdates]);
        },
        onSuccess: async () => {
            await Promise.all([
                queryClient.invalidateQueries({ queryKey: ["monthlyStats"] }),
                queryClient.invalidateQueries({ queryKey: ["pageStats"] }),
            ]);
        },
    });

    const onSubmit = handleSubmit(async (formValues) => {
        await saveMutation.mutateAsync(formValues);
    });

    if (isSalesLoading || isPageStatsLoading) {
        return (
            <div className="flex flex-col gap-6">
                <section className="rounded-2xl bg-white p-6 shadow-sm">
                    <Skeleton height={28} width={180} />
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Skeleton key={`edit-sales-skeleton-${idx}`} height={42} />
                        ))}
                    </div>
                </section>
                <section className="rounded-2xl bg-white p-6 shadow-sm">
                    <Skeleton height={28} width={220} />
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Skeleton key={`edit-page-skeleton-${idx}`} height={42} />
                        ))}
                    </div>
                </section>
            </div>
        );
    }

    if (salesError || pageStatsError) {
        return (
            <p className="text-red-600">
                {salesError?.message || pageStatsError?.message || "Failed to load data."}
            </p>
        );
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <EditableDataSection
                title="Sales Data"
                rows={salesDraft}
                formKey="sales"
                register={register}
            />
            <EditableDataSection
                title="Page Stats Data"
                rows={pageStatsDraft}
                formKey="pageStats"
                register={register}
            />
            <SaveStatus mutation={saveMutation} isSubmitting={isSubmitting} />
        </form>
    );
}
