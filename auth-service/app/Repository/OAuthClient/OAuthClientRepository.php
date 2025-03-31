<?php

namespace App\Repository\OAuthClient;

use App\Enum\OAuth\PassportsEnum;
use App\Models\OAuthClient;

class OAuthClientRepository
{
    public function __construct(
        private readonly OAuthClient $oAuthClient
    ) {}

    public function findClientByPassport(PassportsEnum $passport): OAuthClient
    {
        return $this->oAuthClient->where($passport->value, true)->first();
    }
}
