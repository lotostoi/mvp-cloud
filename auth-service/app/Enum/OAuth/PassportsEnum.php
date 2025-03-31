<?php

namespace App\Enum\OAuth;

enum PassportsEnum: string
{
    case PERSONAL_ACCESS_CLIENT = 'personal_access_client';
    case PASSWORD_CLIENT = 'password_client';
    case REVOKED = 'revoked';
}
