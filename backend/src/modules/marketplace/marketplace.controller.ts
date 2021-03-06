import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse, ApiUseTags } from "@nestjs/swagger";
import { ErrorResponse } from "../../shared/responses/error.response";
import { AirwatchAuthGuard } from "../auth/guards/airwatch.auth.guard";
import { GetAddressesForFormatResponse } from "./responses/get-addresses-for-format.response";
import { GetCitiesForRegionResponse } from "./responses/get-cities-for-region.response";
import { GetFormatsForCityResponse } from "./responses/get-formats-for-city.response";
import { GetMarketplacesResponse } from "./responses/get-marketplaces.response";
import { GetRegionsResponse } from "./responses/get-regions.response";
import { MarketplaceService } from "./services/marketplace.service";

@ApiBearerAuth()
@UseGuards(AirwatchAuthGuard)
@ApiUseTags("marketplaces")
@Controller("marketplaces")
export class MarketplaceController {
    constructor(private readonly marketplaceService: MarketplaceService) {}

    @Get("/")
    @ApiOkResponse({ type: GetMarketplacesResponse, description: "List of marketplaces" })
    @ApiUnauthorizedResponse({ description: "User unauthorized", type: ErrorResponse })
    async getAllMarketplaces() {
        const marketplaces = await this.marketplaceService.findAll();
        return { success: 1, marketplaces };
    }

    @Get("/regions")
    @ApiOkResponse({ type: GetRegionsResponse, description: "List of regions" })
    @ApiUnauthorizedResponse({ description: "User unauthorized", type: ErrorResponse })
    async getAllRegions() {
        const regions = await this.marketplaceService.findAllRegions();
        return { success: 1, regions };
    }

    @Get("/regions/:region/cities")
    @ApiOkResponse({
        type: GetCitiesForRegionResponse,
        description: "List of cities of current region",
    })
    @ApiUnauthorizedResponse({ description: "User unauthorized", type: ErrorResponse })
    async getCitiesForRegion(@Param("region") region: string) {
        const cities = await this.marketplaceService.findCitiesForRegion(region);
        return { success: 1, cities };
    }

    @Get("/regions/:region/cities/:city/formats")
    @ApiOkResponse({
        type: GetFormatsForCityResponse,
        description: "Get formats for current city",
    })
    @ApiUnauthorizedResponse({ description: "User unauthorized", type: ErrorResponse })
    async getFormatsForCity(@Param("region") region: string, @Param("city") city: string) {
        const formats = await this.marketplaceService.findFormatForCity(region, city);
        return { success: 1, formats };
    }

    @Get("/regions/:region/cities/:city/formats/:format")
    @ApiOkResponse({
        type: GetAddressesForFormatResponse,
        description: "Get addresses for current city",
    })
    @ApiUnauthorizedResponse({ description: "User unauthorized", type: ErrorResponse })
    async getAddressesForCity(
        @Param("region") region: string,
        @Param("city") city: string,
        @Param("format") format: string,
    ) {
        const addresses = await this.marketplaceService.findAddressForFormat(region, city, format);
        return { success: 1, addresses };
    }
}
